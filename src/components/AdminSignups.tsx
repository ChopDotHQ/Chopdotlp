import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Download, RefreshCw, Users } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface Signup {
  name: string;
  email: string;
  interest: string;
  timestamp: string;
}

export function AdminSignups() {
  const [signups, setSignups] = useState<Signup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchSignups = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-18b870a9/beta-signups`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch signups');
      }

      const data = await response.json();
      setSignups(data.signups || []);
    } catch (err) {
      console.error('Error fetching signups:', err);
      setError('Failed to load signups. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSignups();
  }, []);

  const downloadCSV = () => {
    const headers = ['Name', 'Email', 'Interest', 'Timestamp'];
    const rows = signups.map(s => [
      s.name,
      s.email,
      s.interest,
      new Date(s.timestamp).toLocaleString()
    ]);

    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chopdot-beta-signups-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const copyEmails = () => {
    const emails = signups.map(s => s.email).join(', ');
    navigator.clipboard.writeText(emails);
    alert('Emails copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-2 text-black dark:text-white">
            Beta Signups
          </h1>
          <p className="text-lg text-black/60 dark:text-white/60">
            Manage your ChopDot beta waitlist
          </p>
        </div>

        {/* Stats and Actions */}
        <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-3 px-6 py-3 bg-[#E6007A]/10 dark:bg-[#E6007A]/20 rounded-xl border border-[#E6007A]/20">
            <Users className="w-5 h-5 text-[#E6007A]" />
            <span className="text-black dark:text-white">
              <span className="font-bold text-2xl">{signups.length}</span> signups
            </span>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={fetchSignups}
              disabled={loading}
              variant="outline"
              className="gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button
              onClick={copyEmails}
              disabled={signups.length === 0}
              variant="outline"
              className="gap-2"
            >
              Copy Emails
            </Button>
            <Button
              onClick={downloadCSV}
              disabled={signups.length === 0}
              className="gap-2 bg-[#E6007A] hover:bg-[#E6007A]/90 text-white"
            >
              <Download className="w-4 h-4" />
              Download CSV
            </Button>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-black/20 dark:border-white/20 border-t-[#E6007A] rounded-full animate-spin" />
          </div>
        )}

        {/* Signups Table */}
        {!loading && signups.length > 0 && (
          <div className="border border-black/10 dark:border-white/10 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-black/5 dark:bg-white/5">
                  <th className="text-left px-6 py-4 text-black dark:text-white font-semibold">
                    Name
                  </th>
                  <th className="text-left px-6 py-4 text-black dark:text-white font-semibold">
                    Email
                  </th>
                  <th className="text-left px-6 py-4 text-black dark:text-white font-semibold">
                    Interest
                  </th>
                  <th className="text-left px-6 py-4 text-black dark:text-white font-semibold">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {signups.map((signup, index) => (
                  <tr
                    key={index}
                    className="border-t border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    <td className="px-6 py-4 text-black dark:text-white">
                      {signup.name}
                    </td>
                    <td className="px-6 py-4 text-black dark:text-white">
                      {signup.email}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-3 py-1 rounded-full text-sm bg-[#E6007A]/10 text-[#E6007A] dark:bg-[#E6007A]/20">
                        {signup.interest}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-black/60 dark:text-white/60">
                      {new Date(signup.timestamp).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Empty State */}
        {!loading && signups.length === 0 && (
          <div className="text-center py-12 border border-black/10 dark:border-white/10 rounded-xl">
            <Users className="w-12 h-12 mx-auto mb-4 text-black/20 dark:text-white/20" />
            <p className="text-lg text-black/60 dark:text-white/60">
              No signups yet. Share your landing page to start collecting!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
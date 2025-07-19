import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import RealTimeDashboard from '../components/Analytics/RealTimeDashboard';
import UpdateNotification from '../components/Analytics/UpdateNotification';
import AuditLogViewer from '../components/Analytics/AuditLogViewer';
import MetricUpdateForm from '../components/Analytics/MetricUpdateForm';
import ConnectionStatusBar from '../components/Analytics/ConnectionStatusBar';
import { useRealTimeAnalytics } from '../hooks/useRealTimeAnalytics';
import { useAuth } from '../context/AuthContext';
import { AnalyticsUpdate } from '../store/analyticsStore';
import { FiPlusCircle } from 'react-icons/fi';
import { MdHistory } from 'react-icons/md';
import { HiOutlineChartBar } from 'react-icons/hi';

const RealTimeAnalyticsPage = () => {
  const { user } = useAuth();
  const {
    isConnected,
    connectionError,
    lastUpdate,
    isFallbackMode,
    sendAnalyticsUpdate,
    auditLog,
  } = useRealTimeAnalytics();

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showAuditLog, setShowAuditLog] = useState(false);
  const [notifications, setNotifications] = useState<AnalyticsUpdate[]>([]);

  const canUpdateMetrics = ['hod', 'principal', 'director'].includes(user?.role || '');

  useEffect(() => {
    if (lastUpdate) setNotifications(prev => [...prev, lastUpdate]);
  }, [lastUpdate]);

  const handleDismissNotification = id => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const handleSubmitUpdate = update => {
    sendAnalyticsUpdate(update);
  };

  const handleReconnect = () => {
    if (user?.id) window.location.reload();
  };

  return (
    <Layout>
      {/* Subtle orange gradient at top, fading to white */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -10,
          background: 'linear-gradient(120deg, #fff7ed 0%, #fffbe9 70%, #ffa726 100%)',
        }}
      />

      <div className="relative min-h-screen flex flex-col items-center px-4 py-10">
        {/* Header */}
        <header className="w-full max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <div className="flex items-center gap-3">
            <HiOutlineChartBar size={32} className="text-orange-600" />
            <span className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Analytics Dashboard
            </span>
          </div>
          {canUpdateMetrics && (
            <div className="flex gap-3 mt-4 md:mt-0">
              <button
                onClick={() => setShowAuditLog(true)}
                className="flex items-center gap-2 px-4 py-2 glass-card border border-orange-200 text-orange-700 font-semibold hover:bg-orange-50 transition"
              >
                <MdHistory size={20} />
                Audit Log
              </button>
              <button
                onClick={() => setShowUpdateForm(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold bg-orange-600 text-white shadow hover:bg-orange-700 transition"
              >
                <FiPlusCircle size={20} />
                Update Metric
              </button>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="w-full max-w-5xl space-y-6">
          {/* Connection StatusBar in glass box */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-5"
          >
            <ConnectionStatusBar
              isConnected={isConnected}
              isFallbackMode={isFallbackMode}
              connectionError={connectionError}
              onReconnect={handleReconnect}
              lastUpdateTime={lastUpdate?.timestamp || null}
            />
          </motion.div>

          {/* Dashboard */}
          <div className="glass-card p-7 min-h-[300px] shadow-md">
            <RealTimeDashboard />
          </div>
        </main>

        {/* Toast Notifications */}
        <AnimatePresence>
          {notifications.map((notification, idx) => (
            <UpdateNotification
              key={notification.id}
              update={notification}
              onDismiss={() => handleDismissNotification(notification.id)}
              autoHideDuration={5000 + 1000 * idx}
            />
          ))}
        </AnimatePresence>

        {/* Update Metric Modal */}
        <AnimatePresence>
          {showUpdateForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass-card w-full max-w-md p-8"
              >
                <MetricUpdateForm
                  onClose={() => setShowUpdateForm(false)}
                  onSubmit={handleSubmitUpdate}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        
        {/* Audit Log Modal */}
        <AnimatePresence>
          {showAuditLog && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass-card w-full max-w-2xl p-8"
              >
                <AuditLogViewer
                  auditLog={auditLog}
                  onClose={() => setShowAuditLog(false)}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default RealTimeAnalyticsPage;

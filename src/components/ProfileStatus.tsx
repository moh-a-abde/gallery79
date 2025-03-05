import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

// Define status types
type StatusType = 'online' | 'offline' | 'busy';

// Define the status data structure
interface StatusData {
  status: StatusType;
  message: string;
  lastUpdated: string;
}

// Default status data
const defaultStatus: StatusData = {
  status: 'online',
  message: "Hello! I'm currently available for new projects.",
  lastUpdated: new Date().toISOString(),
};

export const ProfileStatus: React.FC = () => {
  const [statusData, setStatusData] = useState<StatusData>(defaultStatus);
  const [isOpen, setIsOpen] = useState(false);
  const [tempMessage, setTempMessage] = useState(defaultStatus.message);
  const [tempStatus, setTempStatus] = useState<StatusType>(defaultStatus.status);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  
  // Load status from localStorage on component mount
  useEffect(() => {
    const savedStatus = localStorage.getItem('profileStatus');
    if (savedStatus) {
      try {
        const parsedStatus = JSON.parse(savedStatus) as StatusData;
        setStatusData(parsedStatus);
        setTempMessage(parsedStatus.message);
        setTempStatus(parsedStatus.status);
      } catch (error) {
        console.error('Failed to parse saved status:', error);
      }
    }
  }, []);

  // Check if tooltip is in viewport
  const isInViewport = () => {
    if (!tooltipRef.current) return false;
    const rect = tooltipRef.current.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Handle mouse enter
  const handleMouseEnter = () => {
    setShowTooltip(true);
    // Check if tooltip is in viewport after a small delay to allow it to render
    setTimeout(() => {
      if (!isInViewport()) {
        setShowTooltip(false);
      }
    }, 100);
  };
  
  // Save status to localStorage
  const saveStatus = () => {
    const newStatus: StatusData = {
      status: tempStatus,
      message: tempMessage,
      lastUpdated: new Date().toISOString(),
    };
    
    setStatusData(newStatus);
    localStorage.setItem('profileStatus', JSON.stringify(newStatus));
    setIsOpen(false);
  };
  
  // Get status color based on status type
  const getStatusColor = (status: StatusType): string => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'offline':
        return 'bg-gray-500';
      case 'busy':
        return 'bg-red-500';
      default:
        return 'bg-green-500';
    }
  };
  
  // Get status shadow color based on status type
  const getStatusShadow = (status: StatusType): string => {
    switch (status) {
      case 'online':
        return 'shadow-[0_0_8px_rgba(34,197,94,0.5)]';
      case 'offline':
        return '';
      case 'busy':
        return 'shadow-[0_0_8px_rgba(239,68,68,0.5)]';
      default:
        return '';
    }
  };

  // Get status text based on status type
  const getStatusText = (status: StatusType): string => {
    switch (status) {
      case 'online':
        return 'Online';
      case 'offline':
        return 'Offline';
      case 'busy':
        return 'Busy';
      default:
        return 'Online';
    }
  };

  // Get status text color based on status type
  const getStatusTextColor = (status: StatusType): string => {
    switch (status) {
      case 'online':
        return 'text-green-500';
      case 'offline':
        return 'text-gray-500';
      case 'busy':
        return 'text-red-500';
      default:
        return 'text-green-500';
    }
  };
  
  // Format date for display
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric',
    });
  };
  
  return (
    <>
      {/* Status Indicator */}
      <div 
        className="relative inline-block group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Status dot with glow effect */}
        <div 
          className={`w-5 h-5 ${getStatusColor(statusData.status)} rounded-full border-2 border-background z-10 cursor-pointer transition-transform hover:scale-110 active:scale-95 ${getStatusShadow(statusData.status)} relative`}
          style={{ 
            boxShadow: statusData.status === 'online' 
              ? '0 0 10px rgba(34,197,94,0.7), 0 0 5px rgba(34,197,94,0.5)' 
              : statusData.status === 'busy'
                ? '0 0 10px rgba(239,68,68,0.7), 0 0 5px rgba(239,68,68,0.5)'
                : 'none'
          }}
          onClick={() => setIsOpen(true)}
          title={`Status: ${statusData.status.charAt(0).toUpperCase() + statusData.status.slice(1)}`}
        >
          {/* Inner pulse effect for online status */}
          {statusData.status === 'online' && (
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-50" style={{ animationDuration: '2s' }}></div>
          )}
        </div>
        
        {/* Subtle ring effect */}
        <div className={`absolute -inset-1 -top-0 -left-0 w-7 h-7 rounded-full ${
          statusData.status === 'online' 
            ? 'bg-gradient-to-r from-green-500/0 via-green-500/30 to-green-500/0' 
            : statusData.status === 'busy'
              ? 'bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0'
              : ''
        } opacity-0 group-hover:opacity-100 animate-pulse-slow pointer-events-none`}></div>
        
        {/* Status message tooltip */}
        {showTooltip && (
          <div 
            ref={tooltipRef}
            className="absolute bottom-full right-0 mb-2 w-48 bg-card/95 backdrop-blur-lg border border-primary/20 rounded-lg shadow-lg p-3 z-20 animate-fade-in"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-3 h-3 ${getStatusColor(statusData.status)} rounded-full ${statusData.status === 'online' ? 'animate-pulse' : ''}`}></div>
              <span className={`font-medium text-sm capitalize ${getStatusTextColor(statusData.status)}`}>{statusData.status}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">{statusData.message}</p>
            <div className="text-[10px] text-muted-foreground/70 text-right">
              Updated: {formatDate(statusData.lastUpdated)}
            </div>
          </div>
        )}
      </div>
      
      {/* Status Edit Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden bg-card/95 backdrop-blur-lg border border-primary/20 rounded-xl shadow-xl">
          {/* Status badge */}
          <div className="absolute top-4 right-12 px-3 py-1 rounded-full bg-background/50 border border-primary/20 text-xs font-medium flex items-center gap-2 backdrop-blur-sm">
            <div className={`w-2 h-2 ${getStatusColor(tempStatus)} rounded-full ${tempStatus === 'online' ? 'animate-pulse' : ''}`}></div>
            <span className={`${getStatusTextColor(tempStatus)}`}>Status: {getStatusText(tempStatus)}</span>
          </div>
          
          <DialogHeader className="p-6 pb-2">
            <DialogTitle className="text-2xl font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary/90 via-primary to-primary/70">
              Update Status
            </DialogTitle>
          </DialogHeader>
          
          <div className="p-6 pt-2 space-y-6">
            <div className="space-y-3">
              <Label htmlFor="status" className="text-sm font-medium text-foreground/80">Status</Label>
              <div className="grid grid-cols-3 gap-3">
                <Button
                  type="button"
                  variant={tempStatus === 'online' ? 'default' : 'outline'}
                  className={`flex items-center justify-center gap-2 transition-all duration-300 rounded-xl ${
                    tempStatus === 'online' 
                      ? 'bg-green-500/20 text-green-500 border-green-500/50 hover:bg-green-500/30 shadow-inner shadow-green-500/10' 
                      : 'hover:border-green-500/30 hover:text-green-500/80'
                  }`}
                  onClick={() => setTempStatus('online')}
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Online</span>
                </Button>
                
                <Button
                  type="button"
                  variant={tempStatus === 'busy' ? 'default' : 'outline'}
                  className={`flex items-center justify-center gap-2 transition-all duration-300 rounded-xl ${
                    tempStatus === 'busy' 
                      ? 'bg-red-500/20 text-red-500 border-red-500/50 hover:bg-red-500/30 shadow-inner shadow-red-500/10' 
                      : 'hover:border-red-500/30 hover:text-red-500/80'
                  }`}
                  onClick={() => setTempStatus('busy')}
                >
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Busy</span>
                </Button>
                
                <Button
                  type="button"
                  variant={tempStatus === 'offline' ? 'default' : 'outline'}
                  className={`flex items-center justify-center gap-2 transition-all duration-300 rounded-xl ${
                    tempStatus === 'offline' 
                      ? 'bg-gray-500/20 text-gray-500 border-gray-500/50 hover:bg-gray-500/30 shadow-inner shadow-gray-500/10' 
                      : 'hover:border-gray-500/30 hover:text-gray-500/80'
                  }`}
                  onClick={() => setTempStatus('offline')}
                >
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span>Offline</span>
                </Button>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="message" className="text-sm font-medium text-foreground/80">Daily Message</Label>
                <div className={`text-xs ${tempMessage.length > 140 ? 'text-amber-500' : 'text-muted-foreground'}`}>
                  {tempMessage.length}/150
                </div>
              </div>
              <Textarea
                id="message"
                placeholder="Share a daily message with visitors..."
                value={tempMessage}
                onChange={(e) => setTempMessage(e.target.value)}
                className="min-h-[120px] resize-none bg-background/50 border-primary/20 focus:border-primary/50 rounded-xl"
                maxLength={150}
              />
              <div className="text-xs text-muted-foreground/70">
                This message will be displayed to visitors when they hover over your avatar.
              </div>
            </div>
          </div>
          
          <DialogFooter className="p-6 pt-2 flex gap-3 bg-background/30">
            <Button 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              className="flex-1 border-primary/20 hover:bg-background/50 rounded-xl"
            >
              Cancel
            </Button>
            <Button 
              onClick={saveStatus}
              className="flex-1 bg-primary/90 hover:bg-primary rounded-xl"
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProfileStatus; 
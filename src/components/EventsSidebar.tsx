import React, { useState, useEffect } from 'react';
// @ts-ignore
import Link from '@docusaurus/Link';
// @ts-ignore
import styles from './EventsSidebar.module.css';

export default function EventsSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const savedState = localStorage.getItem('eventsSidebarState');
      if (savedState) {
        const { isOpen: savedIsOpen, isMinimized: savedIsMinimized } = JSON.parse(savedState);
        setIsOpen(savedIsOpen);
        setIsMinimized(savedIsMinimized);
      }
    } catch (error) {
      console.log('Error loading sidebar state:', error);
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('eventsSidebarState', JSON.stringify({ isOpen, isMinimized }));
    } catch (error) {
      console.log('Error saving sidebar state:', error);
    }
  }, [isOpen, isMinimized]);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsMinimized(true);
      setIsAnimating(false);
    }, 300); // Match animation duration
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimized(false);
  };

  if (isMinimized) {
    return (
      <button className={styles.minimizedButton} onClick={handleOpen}>
        <div className={styles.eventsIcon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H9V12H7V10ZM11 10H13V12H11V10ZM15 10H17V12H15V10ZM7 14H9V16H7V14ZM11 14H13V16H11V14ZM15 14H17V16H15V14Z" fill="currentColor"/>
          </svg>
        </div>
        <span className={styles.eventsLabel}>Events</span>
      </button>
    );
  }

  if (!isOpen) return null;

  return (
    <div className={`${styles.floatingSidebar} ${isAnimating ? styles.closing : ''}`}>
      <div className={styles.sidebarContent}>
        <button className={styles.closeButton} onClick={handleClose}>
          ×
        </button>

        <p className={styles.sidebarTitle}>
          Look for us at these events...
        </p>

        <div className={styles.eventsContainer}>
          <div className={styles.sideEvents}>
            <div className={styles.sidebarEvent}>
              <div className={styles.eventImage}>
                <Link to="https://mmsmoa.com/mms2025music">
                  <img
                    className={styles.sidebarImage}
                    src="/images/MMSMusicCity.webp"
                    alt="MMS: Music City Edition 2025"
                  />
                </Link>
              </div>
              <div className={styles.eventInfo}>
                <div className={styles.eventText}>
                  <Link to="https://mmsmoa.com/mms2025music"><b>MMS Music City Edition 2025</b></Link>
                </div>
                <div className={styles.eventDate}>October 12th to 15th • Nashville, Tennessee, USA</div>
              </div>
            </div>
          </div>

          <div className={styles.upNextSection}>
            <div className={styles.upNextTitle}>Up Next</div>
            <div className={styles.upNextEvent}>
              <div className={styles.eventImage}>
                <Link to="https://appmanagevent.com">
                  <img
                    className={`${styles.sidebarImage} ${styles.upNextImage} ${styles.lightImage}`}
                    src="/images/AME-Banner-LightBackground.png"
                    alt="AppManage2025"
                  />
                  <img
                    className={`${styles.sidebarImage} ${styles.upNextImage} ${styles.darkImage}`}
                    src="/images/AME-Banner-DarkBackground.png"
                    alt="AppManage2025"
                  />
                </Link>
              </div>
              <div className={styles.eventInfo}>
                <div className={styles.eventText}>
                  <Link to="https://appmanagevent.com"><b>AppManagEvent 2025</b></Link>
                </div>
                <div className={styles.eventDate}>October 10th • Utrecht, The Netherlands</div>
              </div>
            </div>
          </div>

          <div className={styles.sideEvents}>
            <div className={styles.sidebarEvent}>
              <div className={styles.eventImage}>
                <Link to="https://www.maeds.org/">
                  <img
                    className={`${styles.sidebarImage} ${styles.lightImage}`}
                    src="/images/MAEDS-Banner-LightBackground.png"
                    alt="MAEDS Fall Conference 2025"
                  />
                  <img
                    className={`${styles.sidebarImage} ${styles.darkImage}`}
                    src="/images/MAEDS-Banner-DarkBackground.png"
                    alt="MAEDS Fall Conference 2025"
                  />
                </Link>
              </div>
              <div className={styles.eventInfo}>
                <div className={styles.eventText}>
                  <Link to="https://www.maeds.org"><b>MAEDS Fall Conference 2025</b></Link>
                </div>
                <div className={styles.eventDate}>October 29th to 31st • Michigan, USA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

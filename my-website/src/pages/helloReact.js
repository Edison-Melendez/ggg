import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css'; // Optional CSS styling

export default function CompatibleHardware() {
  return (
    <Layout title="Compatible Hardware">
      <div className={styles.container}>
        <h1 className={styles.header}>Compatible Hardware</h1>
        <div className={styles.hardwareGrid}>
          {/* ACSL Flight Stack - Copter */}
          <div className={styles.card}>
            <h2>ACSL Flight Stack - Copter</h2>
            <p>
              <strong>Flight Computer:</strong>{' '}
              <a 
                href="https://www.hardkernel.com/shop/odroid-m1/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Odroid M1s
              </a>
            </p>
            <p>
              <strong>Flight Controller:</strong>{' '}
              <a 
                href="https://docs.px4.io/main/en/flight_controller/pixhawk6c.html" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Pixhawk 6c
              </a>
            </p>
            <p>
              <strong>Linux Version:</strong>{' '}
              <a 
                href="https://releases.ubuntu.com/20.04/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ubuntu 20.04
              </a>
            </p>
            <p>
              <strong>ROS2 Version:</strong>{' '}
              <a 
                href="https://docs.ros.org/en/foxy/index.html" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Foxy
              </a>
              ,{' '}
              <a 
                href="https://docs.ros.org/en/galactic/index.html" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Galactic
              </a>
              ,{' '}
              <a 
                href="https://docs.ros.org/en/humble/index.html" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Humble
              </a>
            </p>
            <p>
              <strong>PX4 Firmware Version:</strong>{' '}
              <a 
                href="https://github.com/PX4/PX4-Autopilot/releases/tag/v1.15.0" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                V1.15.0
              </a>
            </p>
            <p><strong>Description / Use:</strong> MOCAP system for vision fusion</p>
            <p><strong>Dependencies:</strong> N/A</p>
          </div>

          {/* ACSL Flight Stack - Winged */}
          <div className={styles.card}>
            <h2>ACSL Flight Stack – Winged</h2>
            <p>
              <strong>Flight Computer:</strong>{' '}
              <a 
                href="https://www.hardkernel.com/shop/odroid-m1/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Odroid M1s
              </a>
            </p>
            <p>
              <strong>Flight Controller:</strong>{' '}
              <a 
                href="https://docs.px4.io/main/en/flight_controller/pixhawk6c.html" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Pixhawk 6c
              </a>
            </p>
            <p>
              <strong>Linux Version:</strong>{' '}
              <a 
                href="https://releases.ubuntu.com/20.04/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ubuntu 20.04
              </a>
            </p>
            <p>
              <strong>ROS2 Version:</strong>{' '}
              <a 
                href="https://docs.ros.org/en/galactic/index.html" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Galactic
              </a>
              ,{' '}
              <a 
                href="https://docs.ros.org/en/humble/index.html" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Humble
              </a>
            </p>
            <p>
              <strong>PX4 Firmware Version:</strong>{' '}
              <a 
                href="https://github.com/PX4/PX4-Autopilot/releases/tag/v1.15.0" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                V1.15.0
              </a>
            </p>
            <p><strong>Description / Use:</strong> MOCAP system for vision fusion</p>
            <p><strong>Dependencies:</strong> N/A</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

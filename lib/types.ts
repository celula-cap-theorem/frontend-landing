export interface DashboardData {
  status: string;
  usedBytes: number;
  maxBytes: number;
  createdAt: string;
  lastActivity: string;
}

export interface DatabaseConnection {
  host: string;
  port: number;
  dbName: string;
  dbUser: string;
  engine: string;
  createdAt: string;
  status: string;
}

export interface LandingMetrics {
  totalUsers: number;
  totalDatabases: number;
  activeDatabases: number;
  totalLogins: number;
  activeUsers: number;
  availability: string;
}

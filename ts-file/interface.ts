/**
 * Flick OSINT TypeScript Interface
 * Defines data structures for the Web UI.
 */

export interface OsintResult {
    platform: string;
    url: string;
    found: boolean;
    statusCode?: number;
}

export interface TargetProfile {
    id: string;
    username: string;
    category: 'social' | 'network' | 'leak' | 'crypto';
    lastScan: Date;
}

export interface FlickAppConfig {
    version: string;
    apiUrl: string;
    debugMode: boolean;
    activeModules: string[];
}

// Interface for the Main Engine Class
export interface IFlickEngine {
    startScan(target: string): Promise<OsintResult[]>;
    generateReport(data: OsintResult[]): string;
    validateInput(input: string): boolean;
}

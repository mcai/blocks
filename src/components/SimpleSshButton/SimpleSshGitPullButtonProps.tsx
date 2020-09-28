export interface SimpleSshGitPullButtonProps {
    host: string
    port: number
    sshUsername: string
    sshPassword: string
    workingDirectory: string
    gitUsername: string
    gitPassword: string
    onStdout?: (str: string) => void;
    onStderr?: (str: string) => void;
    onError?: (error: any) => void;
}

export interface SimpleSshButtonProps {
    host: string
    port: number
    username: string
    password: string
    workingDirectory: string
    commands: string[]
    onStdout?: (str: string) => void;
    onStderr?: (str: string) => void;
    onError?: (error: any) => void;
    buttonText?: string
    buttonRunningText?: string
}

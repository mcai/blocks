import React, { Component, Fragment } from "react";
import { SimpleSshButtonProps } from "./SimpleSshButtonProps";
import { SimpleSshButtonState } from "./SimpleSshButtonState";
import { NodeSSH } from "node-ssh";
import { SimpleSpinner } from "../SimpleSpinner/SimpleSpinner";

export class SimpleSshButton extends Component<SimpleSshButtonProps, SimpleSshButtonState> {
    constructor(props: SimpleSshButtonProps) {
        super(props);

        this.state = {
            running: false,
        };
    }

    private async exec(workingDirectory: string, commands: string[]) {
        this.setState({
            running: false,
        });

        try {
            const ssh = new NodeSSH();

            await ssh.connect({
                host: this.props.host,
                port: this.props.port,
                username: this.props.username,
                password: this.props.password,
            });

            if (this.props.filesToUpload !== undefined && this.props.filesToUpload?.length > 0) {
                await ssh.putFiles(
                    this.props.filesToUpload?.map((x) => {
                        return {
                            local: x.localFileName,
                            remote: x.remoteFileName,
                        };
                    }) ?? [],
                );
            }

            for (const command of commands) {
                const result = await ssh.execCommand(command, { cwd: workingDirectory });
                this.props.onStdout?.(result.stdout);
                this.props.onStderr?.(result.stderr);
            }
        } catch (e) {
            this.props.onError?.(e);
        }

        this.setState({
            running: false,
        });
    }

    render() {
        return (
            <Fragment>
                <button
                    className="btn btn-primary"
                    disabled={this.state.running}
                    onClick={async () => await this.exec(this.props.workingDirectory, this.props.commands)}
                >
                    {!this.state.running ? (
                        this.props.buttonText ?? "Run"
                    ) : (
                        <Fragment>
                            <SimpleSpinner />
                            {this.props.buttonRunningText ?? "Running"}
                        </Fragment>
                    )}
                </button>
            </Fragment>
        );
    }
}

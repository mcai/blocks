import React, {Component, Fragment} from "react";
import {SimpleSshButtonProps} from "./SimpleSshButtonProps";
import {SimpleSshButtonState} from "./SimpleSshButtonState";
import {Button, Spinner} from "react-bootstrap";
import {NodeSSH} from "node-ssh";

export class SimpleSshButton extends Component<SimpleSshButtonProps, SimpleSshButtonState> {
    constructor(props: SimpleSshButtonProps) {
        super(props);

        this.state = {
            running: false
        };
    }

    private async exec(workingDirectory: string, commands: string[]) {
        this.setState({
            running: false
        });

        try {
            let ssh = new NodeSSH();

            await ssh.connect({
                host: this.props.host,
                port: this.props.port,
                username: this.props.username,
                password: this.props.password
            });

            if (this.props.filesToUpload != undefined && this.props.filesToUpload?.length > 0) {
                await ssh.putFiles(
                    this.props.filesToUpload?.map(
                        x => {
                            return {
                                local: x.localFileName,
                                remote: x.remoteFileName
                            };
                        }
                    ) ?? []
                );
            }

            for (let command of commands) {
                let result = await ssh.execCommand(command, {cwd: workingDirectory});
                this.props.onStdout?.(result.stdout);
                this.props.onStderr?.(result.stderr);
            }
        } catch (e) {
            this.props.onError?.(e);
        }

        this.setState({
            running: false
        });
    }

    render() {
        return (
            <Fragment>
                <Button
                    variant={"primary"}
                    disabled={this.state.running}
                    onClick={async () => await this.exec(this.props.workingDirectory, this.props.commands)}
                >
                    {
                        !this.state.running
                            ? this.props.buttonText ?? "Run"
                            : (
                                <Fragment>
                                    <Spinner animation={"border"}/>
                                    {this.props.buttonRunningText ?? "Running"}
                                </Fragment>
                            )
                    }
                </Button>
            </Fragment>
        );
    }
}

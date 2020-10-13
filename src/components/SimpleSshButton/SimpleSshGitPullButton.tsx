import React, { Component } from "react";
import { SimpleSshGitPullButtonProps } from "./SimpleSshGitPullButtonProps";
import { SimpleSshGitPullButtonState } from "./SimpleSshGitPullButtonState";
import { SimpleSshButton } from "./SimpleSshButton";

export class SimpleSshGitPullButton extends Component<SimpleSshGitPullButtonProps, SimpleSshGitPullButtonState> {
    render() {
        return (
            <SimpleSshButton
                host={this.props.host}
                port={this.props.port}
                username={this.props.sshUsername}
                password={this.props.sshPassword}
                workingDirectory={this.props.workingDirectory}
                commands={[
                    "/usr/bin/expect <<EOF",
                    "expect \"Username for 'https://github.com':\"",
                    `send "${this.props.gitUsername}\r`,
                    "expect \"Password for 'https://$0@github.com':\"",
                    `send "${this.props.gitPassword}\r"`,
                    "expect EOF",
                    "EOF",
                ]}
                onStdout={this.props.onStdout}
                onStderr={this.props.onStderr}
                onError={this.props.onError}
                buttonText={"pull"}
                buttonRunningText={"pulling..."}
            />
        );
    }
}

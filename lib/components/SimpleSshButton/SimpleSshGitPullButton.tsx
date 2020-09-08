import React, {Component} from "react";
import {SimpleSshGitPullButtonProps} from "./SimpleSshGitPullButtonProps";
import {SimpleSshGitPullButtonState} from "./SimpleSshGitPullButtonState";
import {SimpleSshButton} from "./SimpleSshButton";
import {promises} from "fs";

export class SimpleSshGitPullButton extends Component<SimpleSshGitPullButtonProps, SimpleSshGitPullButtonState> {
    tempFileName: string = "expect.config";

    async componentDidMount() {
        let lines = [
            "#!/usr/bin/expect -f",
            "spawn git pull",
            "expect \"Password*:\"",
            `send "${this.props.gitPassword}\r"`,
            "expect eof"
        ];

        await promises.writeFile(
            this.tempFileName,
            lines.join('\n')
        );
    }

    render() {
        return <SimpleSshButton
            host={this.props.host}
            port={this.props.port}
            username={this.props.sshUsername}
            password={this.props.sshPassword}
            workingDirectory={this.props.workingDirectory}
            filesToUpload={[{
                localFileName: this.tempFileName,
                remoteFileName: this.tempFileName
            }]}
            commands={[
                "expect" // TODO
            ]}
        />;
    }
}

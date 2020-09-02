import React, {Component} from "react";
import {SimpleExportProps} from "./SimpleExportProps";
import {SimpleExportState} from "./SimpleExportState";
import {Button} from "react-bootstrap";
import {Formatting} from "../../utils/Formatting";
// @ts-ignore
import ReactExport from "react-data-export";

export class SimpleExport extends Component<SimpleExportProps, SimpleExportState> {
    private refExcelFile: any;

    constructor(props: SimpleExportProps) {
        super(props);

        this.state = {
            allItems: undefined
        };
    }

    public async download() {
        this.setState({
            allItems: undefined
        });

        let i = 0;

        let allItems = [];

        while (true) {
            let result = await this.props.dataProvider.getList(this.props.resource, this.props.action, {
                pageSize: this.props.pageSize,
                pageNum: i
            });

            if (result == undefined) {
                break;
            }

            allItems.push(result.itemsInCurrentPage);

            if (i == result?.pageCount - 1)
            {
                break;
            }

            i++;
        }

        this.setState({
            allItems: allItems
        });

        this.refExcelFile.handleDownload();
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.download()}>导出</Button>

                <ReactExport.ExcelFile
                    filename={Formatting.toFormattedDateTimeStringAsFileName()}
                    element={<div/>}
                    hideElement={false}
                    ref={(ref: any) => {this.refExcelFile = ref}}
                >
                    <ReactExport.ExcelSheet data={this.state.allItems} name="Sheet1">
                        {
                            this.props.fields.filter(field => field.renderAsText !== undefined).map(field =>
                                <ReactExport.ExcelColumn label={field.title}
                                                         value={(item: any) => field.renderAsText?.(item)}/>)
                        }
                    </ReactExport.ExcelSheet>
                </ReactExport.ExcelFile>
            </div>
        );
    }
}

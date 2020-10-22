import React, { Component } from "react";
import { SimpleExportProps } from "./SimpleExportProps";
import { SimpleExportState } from "./SimpleExportState";
import { SimpleFormatting } from "../../utils/SimpleFormatting";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactExport from "react-data-export";
import innerText from "react-innertext";

export class SimpleExport extends Component<SimpleExportProps, SimpleExportState> {
    private refExcelFile: any;

    constructor(props: SimpleExportProps) {
        super(props);

        this.state = {
            allItems: undefined,
        };
    }

    public async download() {
        this.props.onBeginExport?.();

        this.setState({
            allItems: undefined,
        });

        let pageNum = Math.max(0, this.props.startPageNum ?? 0);

        const allItems = [];

        while (this.props.endPageNum == undefined || pageNum <= this.props.endPageNum) {
            console.log(
                `[SimpleExport] download data from ${this.props.resource}${this.props.action}, pageNum=${pageNum}`,
            );

            const result = await this.props.dataProvider.getList(this.props.resource, this.props.action, {
                paging: {
                    pageSize: this.props.pageSize,
                    pageNum: pageNum,
                },
                ordering: this.props.ordering,
                filter: this.props.filter,
            });

            if (result == undefined) {
                break;
            }

            allItems.push(...result.data);

            const pageCount = Math.ceil(result.total / this.props.pageSize);

            this.props.onExporting?.(pageCount, pageNum);

            if (pageNum == pageCount - 1 || (this.props.endPageNum !== undefined && pageNum == this.props.endPageNum)) {
                break;
            }

            pageNum++;
        }

        this.setState({
            allItems: allItems,
        });

        console.log(`[SimpleExport] handle download`);

        this.props.onEndExport?.();

        this.refExcelFile.handleDownload();
    }

    render() {
        return (
            <ReactExport.ExcelFile
                filename={SimpleFormatting.toFormattedDateTimeStringAsFileName()}
                element={<div />}
                hideElement={false}
                ref={(ref: any) => {
                    this.refExcelFile = ref;
                }}
            >
                <ReactExport.ExcelSheet data={this.state.allItems} name="Sheet1">
                    {React.Children.map(this.props.children, (field) => {
                        return React.isValidElement(field) ? (
                            <ReactExport.ExcelColumn
                                key={field.props.name}
                                label={field.props.title}
                                value={(values: any) => innerText(field) ?? JSON.stringify(values)}
                            />
                        ) : undefined;
                    })?.filter((e) => e != undefined)}
                </ReactExport.ExcelSheet>
            </ReactExport.ExcelFile>
        );
    }
}

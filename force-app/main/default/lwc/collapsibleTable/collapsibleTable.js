import { LightningElement, track } from 'lwc';

export default class CollapsibleTable extends LightningElement {

    @track tableData = [
        {
            id: 1,
            type: 'Email Blast',
            title: 'The enablement cloud',
            areDetailsVisible: false,
            className: "crmabe-engagement_datagrid_row_cols"
        },
        {
            id: 2,
            type: 'Meeting',
            title: 'SilverTower + ACME | Connect',
            areDetailsVisible: false,
            className: "crmabe-engagement_datagrid_row_cols"
        }
    ];

    handleChange(event) {
        const data = this.tableData.find(a => a.id == event.currentTarget.dataset.id);
        data.areDetailsVisible = !data.areDetailsVisible;
        data.className = data.areDetailsVisible ? "crmabe-engagement_datagrid_row_cols crmabe-engagement_datagrid_row_cols-selected" : "crmabe-engagement_datagrid_row_cols";
    }
}
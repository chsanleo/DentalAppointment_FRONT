import React from 'react';

import {
    Inject, ScheduleComponent,
    Day, Week, WorkWeek, Month,
} from '@syncfusion/ej2-react-schedule';

import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

class Calendar extends React.Component {

    componentDidMount(){ 
        
        //if(!user) this.props.history('/login');
    }
    localData =  {
        dataSource: [{
            id: '3',
            EndTime: new Date(2020, 6, 30, 6, 30),
            StartTime: new Date(2020, 6, 30, 4, 30)
        }]
    };

    remoteData = new DataManager({
        url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    });
/*eventSettings={this.localData}>*/
    render() { 
        return (
            <ScheduleComponent
                eventSettings={this.localData}>
                    <Inject services={[Day, Week, WorkWeek, Month]} />
            </ScheduleComponent >
        );
    }
}

export default Calendar;

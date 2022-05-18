import React from "react";
import { FormattedDate , FormattedNumber,FormattedMessage} from "react-intl";

const Job = (props) => {
  if(props.offer.salary === 1){
    return (
      <tr>
        <th scope="row">{props.offer.id}</th>
        <td>{props.offer.name}</td>
        <td>{props.offer.company}</td>
        <td>
          <FormattedMessage
          id="app.greeting"
          description="Greeting to welcome the user to the app"
          defaultMessage=" $ {salary} million"
          values={{salary: props.offer.salary,}}/>
          
        </td>
        <td>{props.offer.city}</td>
        <td>
          <FormattedDate
            value={new Date(props.offer.date)}
            year="numeric"
            month="long"
            day="numeric"
            weekday="long"
          />
        </td>
        <td> <FormattedNumber 
          value = {props.offer.views}>
          </FormattedNumber></td>
  
      </tr>

      
    );

  }else{
    return (
      <tr>
        <th scope="row">{props.offer.id}</th>
        <td>{props.offer.name}</td>
        <td>{props.offer.company}</td>
        <td>
          <FormattedMessage
          id="app.greeting"
          description="Greeting to welcome the user to the app"
          defaultMessage=" $ {salary} milliones"
          values={{salary: props.offer.salary,}}/>
          
        </td>
        <td>{props.offer.city}</td>
        <td>
          <FormattedDate
            value={new Date(props.offer.date)}
            year="numeric"
            month="long"
            day="numeric"
            weekday="long"
          />
        </td>
        <td> <FormattedNumber 
          value = {props.offer.views}>
          </FormattedNumber></td>
  
      </tr>
    );
  }
  
};

export default Job;

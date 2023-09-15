

export default function LoadingWidget(props){


    return (
        <div className = 'loadingwidget'>
        
        <div className = 'elspinner'></div>
        <p>Fetching {props.text}</p>
      

      
        
        </div>
    )
}
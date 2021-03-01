import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    
    let dialogsElements = props.state.dialogs
        .map( d => 
            <DialogItem name={d.name} id={d.id} />);
        
    // [
    //     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    //     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
    //     <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
    //     <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />,
    //     <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
    // ];

    let messagesElements = props.state.messages
        .map ( m => 
            <Message message={m.message} />
            );

    // <Message message={messagesData[0].message}/>
    
    let newTextToAddDialog = React.createRef();

    let addDialog = () => {
        let text = newTextToAddDialog.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} /> */}
             </div>
             <div className={s.messages}>

                {messagesElements}

                {/* <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/> */}
             </div>
             <div>
                 <textarea ref={newTextToAddDialog}></textarea>
                 <button onClick={addDialog}> addDialog </button>
             </div>
        </div>
    )
}

export default Dialogs;
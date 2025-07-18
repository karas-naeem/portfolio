import {v4 as uuid} from 'uuid';

export default function todosReducer(currentTodos , {type,payload})
{
    switch ( type){
        case "ADD_ACTION":
            payload.SetTitleInput("");
            payload.SetToast(
                {
                    show:true,
                    alert:"تم انشاء مهمه بنجاح",
                    type:"success",
                }
            );

            const AddActionResult = [...currentTodos,{id:uuid(),title:payload.TitleInput,details:""}];
            localStorage.setItem("todos", JSON.stringify(AddActionResult));
            return AddActionResult;
        case "SET_COMPLETED_ACTION":

            if(!payload.Todo.isCompleted)
            {
                payload.setToast({
                    show:true,
                    alert:"تم انجاز مهمه بنجاح",
                    type:'success',
                });
            }
            else{
                payload.setToast({
                    show:true,
                    alert:"تم تحويل مهمه ال غير منجزه بنجاح",
                    type:'error',
                });
            }

            const SetCompletedActionResult = currentTodos.map(e => {
                if (e.id === payload.Todo.id) {
                    return {...e,isCompleted:!e.isCompleted};
                }
                else{
                    return e;
                }
            });
            localStorage.setItem("todos", JSON.stringify(SetCompletedActionResult));
            return SetCompletedActionResult;
        case "EDIT_ACTION":
            payload.setToast({
                show:true,
                alert:"تم تعديل مهمه بنجاح",
                type:"info",
            })

            payload.closeDialogFunc();

            const EditActionResult = currentTodos.map(e => {
                if(e.id === payload.todo.id) return {...e,title:payload.todo.title,details:payload.todo.details};
                else return e;
            });
            localStorage.setItem("todos", JSON.stringify(EditActionResult));
            return EditActionResult;
        default:
            payload.setToast({
                show:true,
                alert:"تم الحذف بنجاح",
                type:'error',
            });

            payload.closeDialogFunc();

            const DeleteActionResult = currentTodos.filter(e => e.id !== payload.todoId);
            localStorage.setItem("todos", JSON.stringify(DeleteActionResult));
            return DeleteActionResult;
    }
}
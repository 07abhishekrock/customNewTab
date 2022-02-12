# customNewTab
my custom newtab for chrome

## how the pinned items work
1. The user copies some image , text or link.
2. The user right clicks on the pinned items and selects paste copied item.
3. The user can also simply do `ctrl+V` for pasting it directly.
4. The system calculates the length of the pasted item.
   1. if the total number of words is less than 3 , then it is a code.
   2. if the total number of words is more than or equal to 3 , then it is a copied text.
   3. if the text contains a link , it is a link. (regex match is performed.)
5. the user can also pin a non-copied item using a plus icon on the header.

***
## how the task management works
1. the task management is a simple checklist based monitoring of task progress.
2. Each task has following schema : 
```typescript

     type TaskItem = {
          id : string,
          completed : boolean,
          text : string,
          comments : string
     }

     type Task = {
          taskTitle : string,
          taskDescription ?: string,
          taskDate : Date,

          taskItems : TaskItem[],
     }

```
3. Only task items that are currently pending can be deleted.
4. Completed items can be marked incomplete.

>Future Scope : creating a log of changes to keep track of completed and incomplete agendas.

***






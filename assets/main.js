$(document).ready(function() {
    $('#add-task-form').submit(function(event) {
        event.preventDefault();
        
        let taskName = $('#task-name').val();
        
        if (taskName.trim() !== '') {
            let listItem = $('<li></li>').text(taskName);

            listItem.click(function() {
                $(this).toggleClass('completed');
            });
            
            $('#task-list').append(listItem);
            
            $('#task-name').val('');
        }
    });
});
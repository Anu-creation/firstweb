$(document).ready(function(){
    $nav= $('.nav');
    $toggleCollapse= $('.toggle-collapse');

    /*  click event on toggle mane */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
})
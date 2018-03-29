
$('.toggle').click(function(e) {
    e.preventDefault();

    let $this = $(this);

    if ($this.next().hasClass('show')) {

        $this.next().removeClass('show');
        $this.next().slideUp(500);

    } else {

        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(500);
        $this.next().toggleClass('show');
    }
});
$(document).ready(function() {
    $('.js-faq-btn').on('click', function(e) {
        e.preventDefault();

        const changeIcon = $(this);
        const content = changeIcon.data('content');

        changeIcon.toggleClass('fa-plus fa-minus');

        $('.' + content).toggleClass('hidden');
    });
});
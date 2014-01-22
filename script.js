$('button').click(function () {
    var weight = Number($('input[name=weight]').val());
    var reps = Number($('input[name=reps]').val());
    var max = weight * reps * 0.0333 + weight;
    $('#result').append("<p>" + max + "</p>");
});
var removeNthFromEnd = function(head, n) {
    // append a new head
    var start = {
        next: head
    };

    var cursor = head;
    var prev = start;
    var target = head;
    var step = n;

    // cursor starts from head
    while (cursor) {
        // we try waiting some steps before moving prev & start
        // cursor & target starts ad the same
        // so we wait step goes to 0 and -1 for each round
        if (step === 0) {
            prev = prev.next;
            target = target.next;
        } else {
            step -= 1;
        }

        cursor = cursor.next;
    }

    prev.next = target.next;

    return start.next;
};
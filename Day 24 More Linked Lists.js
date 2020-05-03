this.removeDuplicates=function(head){
    var previous = head;
        while (previous) { 
            var next = previous.next;
            if (next && previous.data == next.data) { 
                previous.next = next.next;
            } else {
                previous = previous.next;
            }
        }
    return head;
}

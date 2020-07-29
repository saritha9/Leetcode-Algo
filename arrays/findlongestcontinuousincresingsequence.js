function longestincsubsequence(sequence) {
    var proposals=[];
    var longestProposal=null;
    for (var i = 0; i < sequence.length; i++) {
        var proposal = [];
        proposal.push(sequence[i]);
        for (var j = i + 1; j < sequence.length; j++) {
            if (sequence[j] < proposal[proposal.length - 1]) break;
            proposal.push(sequence[j]);
        }
        proposals.push(proposal);
        if (longestProposal==null || proposal.length>longestProposal.length) longestProposal=proposal;
        if (longestProposal.length==sequence.length-i) return longestProposal;
    }
    return longestProposal;
}
console.log(longestincsubsequence([10,9,2,5,3,7,101,18]));
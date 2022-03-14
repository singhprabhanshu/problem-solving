/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] find the minimum number of conference rooms required.

Java Solution
When a room is taken, the room can not be used for anther meeting until the current meeting is over. 
As soon as the current meeting is finished, the room can be used for another meeting. 
We can sort the meetings by start timestamps and sequentially assign each meeting to a room. 
Each time when we assign a room for a meeting, we check if any meeting is finished so that the room can be reused. 
In order to efficiently track the earliest ending meeting, we can use a min heap. 
Whenever an old meeting ends before a new meeting starts, we reuse the room (i.e., do not add more room). 
Otherwise, we need an extra room (i.e., add a room).

for javascript, we will use array to store the end times.
we will find min of arr elements and compare present starttime with min end time
if present start time < min end time that mean new room, other wise update the array with new end time.
*/


const meetingRoomII = (nums) => {
    nums.sort((a, b) => a[0]- b[0]);
    const meetingRoom = [nums[0][1]];
    for (let i = 1 ; i < nums.length; i++) {
        const [start, end] = [...nums[i]];
        const earliest = Math.min(...meetingRoom);
        if (start < earliest) {
            meetingRoom.push(end);
        } else {
            meetingRoom[meetingRoom.indexOf(earliest)] = end;
        }
    };
    return meetingRoom.length;
};

const check = meetingRoomII([[1, 5], [0, 30], [3, 6], [25, 29], [40, 50]]);
console.log(check);
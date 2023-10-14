
function classifyMembers(input) {

  
    if (!Array.isArray(input) || input === undefined) {
      throw new Error('Input must be a valid array!');
    }
  
    if (input.length === 0) {
      return { noOfGroups: 0 };
    }
  
    const output = {};
    const groups = [];
    let currentGroup = [];
  
    const sortedMembers = [...input].map(member => ({
      ...member,
      age: 2019 - new Date(member.dob).getFullYear(),
    })).sort((a, b) => a.age - b.age);
  
    currentGroup.push(sortedMembers[0]);
  
    for (let i = 1; i < sortedMembers.length; i++) {
      if (sortedMembers[i].age - currentGroup[0].age <= 5 && currentGroup.length < 3) {
        currentGroup.push(sortedMembers[i]);
      } else {
        groups.push(currentGroup);
        currentGroup = [sortedMembers[i]];
      }
    }
  
    if (currentGroup.length > 0) {
      groups.push(currentGroup);
    }
  
    output.noOfGroups = groups.length;
  
    for (let i = 0; i < groups.length; i++) {
      output[`group${i + 1}`] = {
        members: groups[i],
        oldest: groups[i][groups[i].length - 1].age,
        sum: groups[i].reduce((total, member) => total + member.age, 0),
        regNos: groups[i].map(el => +el.regNo).sort((a, b) => a - b),
      };
    }
  
    return output;
  }
  
  export default classifyMembers;
  
// export default classifier;

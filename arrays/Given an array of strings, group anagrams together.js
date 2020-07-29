function areAnagram(str1,  str2) 
{ 
    var n1 = str1.Count; 
    var n2 = str2.Count;
        if(n1 != n2)
        {
            return false;
        }
        str1.sort();
        str2.sort();
        for (var i = 0; i < n1; i++) 
        { 
            if (str1[i] != str2[i])
            { 
                return false; 
            } 
        } 
  
        return true;
}
var anagram = areAnagram("hares", "notes");
console.log("Anagram", anagram);

// public static void Main(string[] args) 
//     { 
//         // create and initalize new ArrayList 
//         ArrayList str1 = new ArrayList(); 
//         str1.Add('t'); 
//         str1.Add('e');https://www.youtube.com/watch?v=Tztc73r8348 
//         str1.Add('s'); 
//         str1.Add('t'); 
//         // create and initalize new ArrayList 
//         ArrayList str2 = new ArrayList(); 
//         str2.Add('t'); 
//         str2.Add('t'); 
//         str2.Add('e'); 
//         str2.Add('w'); 
  
//         if (areAnagram(str1, str2)) { 
//             Console.WriteLine("The two strings are"
//                               + " anagram of each other"); 
//         } 
//         else { 
//             Console.WriteLine("The two strings are not"
//                               + " anagram of each other"); 
//         } 
//     } 
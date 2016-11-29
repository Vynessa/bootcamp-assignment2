module.exports={
findMinMax:function(arr)
{
    var max = arr[0];
    var min = arr[0];
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] > max)
        {
          max = arr[i];
        }

        if (arr[i] < min)
        {
          min = arr[i];
        }
    }

    if (min === max)
    {
      return [max];
    }

    else
    {
      return [min, max];
    }
},

words:function(str)
{
  var result = {};
  
  arr_of_words = str.replace(/[\r\n\s\t]/g, " ").replace("  ", " ").split(" ");
  
  for(var i=0; i < arr_of_words.length; i++)
  {
    var checkCount = arr_of_words[i];
    count = 0;
    
    for(var j=0; j < arr_of_words.length; j++)
    {
      if(checkCount === arr_of_words[j])
      {
        count++;
      }
    }
    
    result[checkCount] = count;
  }
  
  return result;
}

}



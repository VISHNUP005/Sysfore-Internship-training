
using C_Day1;

Console.WriteLine("welcome to Cult-fit");


Console.WriteLine("Enter the Exercise name ");
string? Exename = Console.ReadLine();
Console.WriteLine("Enter the Exercise duration in mins");
string dur = Console.ReadLine();



try
{
    int Duration = int.Parse(dur);

}
catch(FormatException)
{
    Console.WriteLine("Enter the duration in integers");
}



if(Exename == "Strength")
{
    Console.WriteLine("Enter the number of Reps in count");
    string rep=Console.ReadLine();
    Console.WriteLine("Enter the weights in kg");
    string wei=Console.ReadLine();
    int reps = 0;
    int weights = 0;
    try
    {
        reps = int.Parse(rep);
        weights=int.Parse(wei);

    }
    catch (FormatException)
    {
        Console.WriteLine("Enter the Reps & weights in integers");
    }
    var obj = new StrengthTrain(weights:weights,reps:reps);
    obj.ShowDetails();
    obj.CaloriesBurnt();
}
else if(Exename=="Dumbells")
{
    Console.WriteLine("Enter the number of Reps in count");
    string rep = Console.ReadLine();
    Console.WriteLine("Enter the weights in kg");
    string wei = Console.ReadLine();
    int reps = 0;
    int weights = 0;
    try
    {
        reps = int.Parse(rep);
        weights = int.Parse(wei);

    }
    catch (FormatException)
    {
        Console.WriteLine("Enter the Reps & weights in integers");
    }
    var obj1=new Dumbells(weights:reps,reps:weights);
    obj1.ShowDetails();
    obj1.CaloriesBurnt();
}
else
{
    Console.WriteLine("No Exercise Found");
}
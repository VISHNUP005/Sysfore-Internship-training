using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_Day1
{
    public class StrengthTrain : Exercise, ICalbnt
    {
        public int weights;
        public int reps;
        public float calburn;
        public StrengthTrain( int weights,int reps) : base(name:"Strength Train",type1:"Weights") {
        this.weights = weights;
            this.reps = reps;
        
        }
        public void CaloriesBurnt()

        {
            this.calburn = (float)(this.weights * 4.5 / this.reps);
            Console.WriteLine("-------Congratulations--------");
            Console.WriteLine($"Calories burnt are {this.calburn} kcal");
        }

        public override void ShowDetails()
        {
            Console.WriteLine($"Exercise Name:   {Name} ");
            Console.WriteLine($"Exercise Type:   {Type}");
        }
    }
}

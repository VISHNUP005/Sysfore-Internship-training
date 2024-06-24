using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_Day1
{
    public  class Exercise
    {
        protected string Name { get; set; } = "Excercise not specified yet";
       protected string Type { get; set; } = "Type not specified yet";

        public Exercise(string name, string type1)
        {
            Name = name;
            Type = type1;
        }

        public virtual void ShowDetails()
        {
            Console.WriteLine($" Name:  {Name}");
            Console.WriteLine($"Type:  {Type}");
        }

    }
}

using System;
using Microsoft.Research.Science.Data;
using Newtonsoft.Json;

namespace NetCDFTest
{
    class Program
    {
        static void Main(string[] args)
        {
            var reader = new Microsoft.Research.Science.Data.NetCDF4.NetCDFUri();
            reader.FileName = "c:/users/mobius/downloads/W_XX-EUMETSAT-Darmstadt,HYPERSPECT+SOUNDING,METOPA+IASI_C_EUMP_20210904141453_77199_eps_o_l2.nc";
            reader.OpenMode = ResourceOpenMode.ReadOnly;
            Variable firstVar= null;
            using (var ds = DataSet.Open(reader))
            {
                var varset = ds.Variables;
                foreach(var v in varset)
                {
                    Console.WriteLine(v.Name);
                    if (firstVar == null) { firstVar = v; }
                }
                //get details on first variable
                Console.WriteLine($"Now let's print data for variable {firstVar.Name}:");
                var d = firstVar.GetData();
                Console.WriteLine(JsonConvert.SerializeObject(d));
            }
        }
    }
}

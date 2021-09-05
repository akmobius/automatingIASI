using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using Newtonsoft.Json;

namespace MethaneTest
{
    public class Configuration
    {
        public string connectionString;
    }

    static class config
    {
        public static Configuration param;
        static config()
        {
            StreamReader sr = new StreamReader("config.json");
            param = JsonConvert.DeserializeObject<Configuration>(sr.ReadToEnd());
        }


    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MethaneTest.Models
{
    public class Observation
    {
        public string ObservationID { get; set; }
        public DateTimeOffset Timestamp { get; set; }

        public double Longitude { get; set; }

        public double Latitude { get; set; }

        public double MethanePPB { get; set; }

    }

}

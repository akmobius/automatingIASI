using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore;
using MethaneTest.Models;

namespace MethaneTest
{
    public class SQLContext : DbContext
    {
        public DbSet<Observation> Methane { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(config.param.connectionString);
        }
    }
}

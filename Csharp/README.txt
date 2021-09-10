dotnet ef migrations add InitialCreate #builds the initial migration for entity framework
dotnet ef database update #builds the database

_______________________

netcdf
https://github.com/predictionmachines/SDSlite

Windows
For Windows download the version of netCDF4 (without DAP) corresponding 
to your machine, either 32 or 64 bit. 
These are currently: 
https://www.unidata.ucar.edu/downloads/netcdf/ftp/netCDF4.7.4-NC4-32.exe 
https://www.unidata.ucar.edu/downloads/netcdf/ftp/netCDF4.7.4-NC4-64.exe 
When you install this library select the option to add its location 
to your system PATH, so that SDSLite can find it.

Linux
For Linux install pre-built netCDF-C libraries. For example on Ubuntu:

sudo apt-get install libnetcdf-dev

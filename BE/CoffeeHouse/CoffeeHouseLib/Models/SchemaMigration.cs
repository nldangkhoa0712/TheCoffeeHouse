﻿using System;
using System.Collections.Generic;

namespace CoffeeHouseLib.Models;

public partial class SchemaMigration
{
    public long Version { get; set; }

    public DateTime? InsertedAt { get; set; }
}

using System;
using System.Collections.Generic;

namespace CoffeeHouseLib.Models;

public partial class RefreshToken1
{
    public string RefreshToken { get; set; } = null!;

    public DateTime? Expire { get; set; }

    public DateTime? Created { get; set; }

    public DateTime? Revoke { get; set; }
}

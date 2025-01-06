using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace CoffeeHouseLib.Models;

public partial class DbcoffeeHouseContext : DbContext
{
    public DbcoffeeHouseContext()
    {
    }

    public DbcoffeeHouseContext(DbContextOptions<DbcoffeeHouseContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Account> Accounts { get; set; }

    public virtual DbSet<Address> Addresses { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Discount> Discounts { get; set; }

    public virtual DbSet<Image> Images { get; set; }

    public virtual DbSet<ImageClass> ImageClasses { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<OrderDetail> OrderDetails { get; set; }

    public virtual DbSet<OrderLog> OrderLogs { get; set; }

    public virtual DbSet<OrderStatus> OrderStatuses { get; set; }

    public virtual DbSet<OrderTopping> OrderToppings { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<ProductDiscount> ProductDiscounts { get; set; }

    public virtual DbSet<ProductSize> ProductSizes { get; set; }

    public virtual DbSet<ProductTopping> ProductToppings { get; set; }

    public virtual DbSet<Topping> Toppings { get; set; }

    public virtual DbSet<Voucher> Vouchers { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Data Source=DBCoffeeHouse.mssql.somee.com;Initial Catalog=DBCoffeeHouse;User ID=buihuyphuc111_SQLLogin_1;Password=Somee2k3.;Persist Security Info=False;TrustServerCertificate=True"
    );

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Account>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Account__3214EC078B5ADFE6");

            entity.ToTable("Account");

            entity.HasIndex(e => e.Id, "UQ__Account__3214EC06B64DEBB8").IsUnique();

            entity.Property(e => e.AccessToken).HasMaxLength(255);
            entity.Property(e => e.Email).HasMaxLength(255);
            entity.Property(e => e.Password).HasMaxLength(255);
            entity.Property(e => e.RefreshToken).HasMaxLength(255);
            entity.Property(e => e.ResetPasswordExpired).HasColumnType("datetime");
            entity.Property(e => e.ResetPasswordToken).HasMaxLength(255);
            entity.Property(e => e.VerifyTime).HasColumnType("datetime");
            entity.Property(e => e.VerifyToken).HasMaxLength(255);

            entity.HasOne(d => d.Customer).WithMany(p => p.Accounts)
                .HasForeignKey(d => d.CustomerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Account__Custome__7B5B524B");
        });

        modelBuilder.Entity<Address>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Address__3214EC07C46F5D4A");

            entity.ToTable("Address");

            entity.HasIndex(e => e.Id, "UQ__Address__3214EC065067E907").IsUnique();

            entity.Property(e => e.Address1)
                .HasMaxLength(255)
                .HasColumnName("Address");

            entity.HasOne(d => d.Customer).WithMany(p => p.Addresses)
                .HasForeignKey(d => d.CustomerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Address__Custome__02084FDA");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Category__3214EC07FBE2A5F5");

            entity.ToTable("Category");

            entity.HasIndex(e => e.Id, "UQ__Category__3214EC0635BCEDF4").IsUnique();

            entity.Property(e => e.CategoryName).HasMaxLength(50);
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Customer__3214EC07E6369397");

            entity.ToTable("Customer");

            entity.HasIndex(e => e.Id, "UQ__Customer__3214EC063D14122A").IsUnique();

            entity.Property(e => e.DateOfBirth).HasColumnType("datetime");
            entity.Property(e => e.FullName).HasMaxLength(255);
            entity.Property(e => e.Phone).HasMaxLength(12);
        });

        modelBuilder.Entity<Discount>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Discount__3214EC0779A96EC0");

            entity.ToTable("Discount");

            entity.HasIndex(e => e.Id, "UQ__Discount__3214EC0674A1A904").IsUnique();

            entity.Property(e => e.DiscountName).HasMaxLength(255);
            entity.Property(e => e.DiscountType)
                .HasMaxLength(255)
                .HasDefaultValue("VALUE");
            entity.Property(e => e.DiscountValue).HasColumnType("decimal(18, 0)");
            entity.Property(e => e.EndDate).HasColumnType("datetime");
            entity.Property(e => e.IsActive).HasDefaultValue(true);
            entity.Property(e => e.StartDate).HasColumnType("datetime");
        });

        modelBuilder.Entity<Image>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Image__3214EC07F38348AD");

            entity.ToTable("Image");

            entity.HasIndex(e => e.Id, "UQ__Image__3214EC06CB0A1E81").IsUnique();

            entity.Property(e => e.Content).HasMaxLength(300);
            entity.Property(e => e.ImageName).HasMaxLength(255);
            entity.Property(e => e.ImageType).HasMaxLength(255);

            entity.HasOne(d => d.ImageClass).WithMany(p => p.Images)
                .HasForeignKey(d => d.ImageClassId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Image__ImageClas__74AE54BC");
        });

        modelBuilder.Entity<ImageClass>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ImageCla__3214EC074FA5F590");

            entity.ToTable("ImageClass");

            entity.HasIndex(e => e.Id, "UQ__ImageCla__3214EC0693679820").IsUnique();

            entity.Property(e => e.ImageClassCode).HasMaxLength(255);
            entity.Property(e => e.ImageClassName).HasMaxLength(255);
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Order__3214EC078A85B5CD");

            entity.ToTable("Order");

            entity.HasIndex(e => e.Id, "UQ__Order__3214EC06069391EB").IsUnique();

            entity.Property(e => e.OrderDate).HasColumnType("datetime");
            entity.Property(e => e.Status).HasMaxLength(255);

            entity.HasOne(d => d.Account).WithMany(p => p.Orders)
                .HasForeignKey(d => d.AccountId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Order__AccountId__7E37BEF6");

            entity.HasOne(d => d.Voucher).WithMany(p => p.Orders)
                .HasForeignKey(d => d.VoucherId)
                .HasConstraintName("FK__Order__VoucherId__05D8E0BE");
        });

        modelBuilder.Entity<OrderDetail>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__OrderDet__3214EC078EEA1B0B");

            entity.ToTable("OrderDetail");

            entity.Property(e => e.Note).HasMaxLength(255);

            entity.HasOne(d => d.Discount).WithMany(p => p.OrderDetails)
                .HasForeignKey(d => d.DiscountId)
                .HasConstraintName("FK__OrderDeta__Disco__04E4BC85");

            entity.HasOne(d => d.Order).WithMany(p => p.OrderDetails)
                .HasForeignKey(d => d.OrderId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__OrderDeta__Order__01142BA1");
        });

        modelBuilder.Entity<OrderLog>(entity =>
        {
            entity.HasKey(e => new { e.StatusCode, e.OrderId }).HasName("PK__OrderLog__86424141B3222060");

            entity.ToTable("OrderLog");

            entity.Property(e => e.StatusCode).HasMaxLength(20);

            entity.HasOne(d => d.Order).WithMany(p => p.OrderLogs)
                .HasForeignKey(d => d.OrderId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__OrderLog__OrderI__7D439ABD");

            entity.HasOne(d => d.StatusCodeNavigation).WithMany(p => p.OrderLogs)
                .HasForeignKey(d => d.StatusCode)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__OrderLog__Status__7C4F7684");
        });

        modelBuilder.Entity<OrderStatus>(entity =>
        {
            entity.HasKey(e => e.StatusCode).HasName("PK__OrderSta__6A7B44FDBD58E7F9");

            entity.ToTable("OrderStatus");

            entity.Property(e => e.StatusCode).HasMaxLength(20);
            entity.Property(e => e.StatusName).HasMaxLength(255);
        });

        modelBuilder.Entity<OrderTopping>(entity =>
        {
            entity.HasKey(e => new { e.OrderDetailId, e.ToppingId }).HasName("PK__OrderTop__9D59FFA4DC91ACC0");

            entity.ToTable("OrderTopping");

            entity.HasIndex(e => e.OrderDetailId, "UQ__OrderTop__D3B9D36DA1127E9E").IsUnique();

            entity.Property(e => e.OrderDetailId).ValueGeneratedOnAdd();

            entity.HasOne(d => d.OrderDetail).WithOne(p => p.OrderTopping)
                .HasForeignKey<OrderTopping>(d => d.OrderDetailId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__OrderTopp__Order__7F2BE32F");

            entity.HasOne(d => d.Topping).WithMany(p => p.OrderToppings)
                .HasForeignKey(d => d.ToppingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__OrderTopp__Toppi__00200768");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Product__3214EC07B2EF3B2A");

            entity.ToTable("Product");

            entity.HasIndex(e => e.Id, "UQ__Product__3214EC06E449860B").IsUnique();

            entity.Property(e => e.Description).HasColumnType("text");
            entity.Property(e => e.IsValid).HasDefaultValue(true);
            entity.Property(e => e.ProductName).HasMaxLength(255);

            entity.HasOne(d => d.Category).WithMany(p => p.Products)
                .HasForeignKey(d => d.CategoryId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Product__Categor__75A278F5");

            entity.HasMany(d => d.Images).WithMany(p => p.Products)
                .UsingEntity<Dictionary<string, object>>(
                    "ProductImage",
                    r => r.HasOne<Image>().WithMany()
                        .HasForeignKey("ImageId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__ProductIm__Image__778AC167"),
                    l => l.HasOne<Product>().WithMany()
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__ProductIm__Produ__76969D2E"),
                    j =>
                    {
                        j.HasKey("ProductId", "ImageId").HasName("PK__ProductI__635DA9BD9A2F8179");
                        j.ToTable("ProductImage");
                    });
        });

        modelBuilder.Entity<ProductDiscount>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ProductD__3214EC0785F67FC6");

            entity.ToTable("ProductDiscount");

            entity.HasIndex(e => e.Id, "UQ__ProductD__3214EC06150BF4A5").IsUnique();

            entity.Property(e => e.IsActive).HasDefaultValue(true);

            entity.HasOne(d => d.Discount).WithMany(p => p.ProductDiscounts)
                .HasForeignKey(d => d.DiscountId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__ProductDi__Disco__02FC7413");

            entity.HasOne(d => d.Product).WithMany(p => p.ProductDiscounts)
                .HasForeignKey(d => d.ProductId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__ProductDi__Produ__03F0984C");
        });

        modelBuilder.Entity<ProductSize>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ProductS__3214EC07ADE5071F");

            entity.ToTable("ProductSize");

            entity.HasIndex(e => e.Id, "UQ__ProductS__3214EC067EA78A52").IsUnique();

            entity.Property(e => e.IsValid).HasDefaultValue(true);
            entity.Property(e => e.Price).HasColumnType("decimal(18, 0)");
            entity.Property(e => e.Size).HasMaxLength(30);

            entity.HasOne(d => d.Product).WithMany(p => p.ProductSizes)
                .HasForeignKey(d => d.ProductId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__ProductSi__Produ__787EE5A0");
        });

        modelBuilder.Entity<ProductTopping>(entity =>
        {
            entity.HasKey(e => new { e.ProductId, e.ToppingId }).HasName("PK__ProductT__FAECEA05A747B8E0");

            entity.ToTable("ProductTopping");

            entity.HasIndex(e => e.ProductId, "UQ__ProductT__B40CC6CC96823E36").IsUnique();

            entity.Property(e => e.ProductId).ValueGeneratedOnAdd();

            entity.HasOne(d => d.Product).WithOne(p => p.ProductTopping)
                .HasForeignKey<ProductTopping>(d => d.ProductId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__ProductTo__Produ__797309D9");

            entity.HasOne(d => d.Topping).WithMany(p => p.ProductToppings)
                .HasForeignKey(d => d.ToppingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__ProductTo__Toppi__7A672E12");
        });

        modelBuilder.Entity<Topping>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Topping__3214EC07324BFCEF");

            entity.ToTable("Topping");

            entity.HasIndex(e => e.Id, "UQ__Topping__3214EC069104997D").IsUnique();

            entity.Property(e => e.IsValid).HasDefaultValue(true);
            entity.Property(e => e.ToppingName).HasMaxLength(255);
            entity.Property(e => e.ToppingPrice).HasColumnType("decimal(18, 0)");
        });

        modelBuilder.Entity<Voucher>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Voucher__3214EC0751D4276F");

            entity.ToTable("Voucher");

            entity.HasIndex(e => e.Id, "UQ__Voucher__3214EC0621CC300E").IsUnique();

            entity.HasIndex(e => e.Code, "UQ__Voucher__A25C5AA7FA44BE00").IsUnique();

            entity.Property(e => e.Code).HasMaxLength(50);
            entity.Property(e => e.Description).HasMaxLength(300);
            entity.Property(e => e.DiscountType).HasMaxLength(255);
            entity.Property(e => e.DiscountValue).HasColumnType("decimal(18, 0)");
            entity.Property(e => e.EndDate).HasColumnType("datetime");
            entity.Property(e => e.IsActive).HasDefaultValue(true);
            entity.Property(e => e.MinOrderValue).HasColumnType("decimal(18, 0)");
            entity.Property(e => e.StartDate).HasColumnType("datetime");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

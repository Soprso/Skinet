using System;
using Core.Entities;

namespace Core.Specifications;

public class ProductSpecification :BaseSpecification<Product>
{
    public ProductSpecification(string? brand, string? type) : base(e=>
        (string.IsNullOrWhiteSpace(brand)|| e.Brand==brand) &&
        (string.IsNullOrWhiteSpace(type) || e.Type==type)
    )
    {
    }
}

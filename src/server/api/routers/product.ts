import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const productSchema = z.object({
    name: z.string(),
    description:z.string(),
    price: z.number(),
    brandId: z.number(),
    categoryId: z.number()
}) 

const categorySchema =z.object({
    name: z.string()
})

const brandSchema = z.object({
    name:z.string()
})

export const productRouter = createTRPCRouter({

    getProducts: publicProcedure.query(({ctx})=>{
        return ctx.db.product.findMany({
            include:{
                brand:true,
                category:true
            }
        })
    }),

    getProductById: publicProcedure.input(z.object({id:z.number()})).query(({input,ctx})=>{
        return ctx.db.product.findUnique({
            where:{id:input.id},
            include:{
                brand:true,
                category:true
            }
        })
    }),

    createProduct: publicProcedure.input(productSchema).mutation(({input,ctx})=>{
        return ctx.db.product.create({
            data:{
                name:input.name,
                description:input.description,
                price:input.price,
                brandId:input.brandId,
                categoryId:input.categoryId
            }
        })
    }),

    createCategory: publicProcedure.input(categorySchema).mutation(({input,ctx})=>{
        return ctx.db.category.create({
            data:{name:input.name}
        })
    }),

    createBrand: publicProcedure.input(brandSchema).mutation(({input,ctx})=>{
        return ctx.db.brand.create({
            data:{name:input.name}
        })
    }),

    getCategory: publicProcedure.query(({ctx})=>{
        return ctx.db.category.findMany()
    }),

    getBrand: publicProcedure.query(({ctx})=>{
        return ctx.db.brand.findMany()
    })
});


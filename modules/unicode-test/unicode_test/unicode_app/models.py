# -*- coding: utf-8 -*-
# 数据模型 - Data Models
# 这个文件定义了数据库模型
# This file defines the database models

from django.db import models


class Product(models.Model):
    """
    产品模型 - Product model
    用于存储产品信息 - Used to store product information
    """

    # 产品名称 - Product name
    name = models.CharField(max_length=255, verbose_name="产品名称")

    # 产品描述 - Product description
    description = models.TextField(blank=True, verbose_name="产品描述")

    # 价格 - Price
    price = models.DecimalField(
        max_digits=10, decimal_places=2, verbose_name="价格（元）"
    )

    # 创建时间 - Creation time
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")

    class Meta:
        verbose_name = "产品"
        verbose_name_plural = "产品列表"

    def __str__(self):
        return f"{self.name} - ¥{self.price}"


class Category(models.Model):
    """
    カテゴリモデル - Category model
    商品のカテゴリを管理する - Manages product categories
    """

    # カテゴリ名 - Category name
    name = models.CharField(max_length=100, verbose_name="カテゴリ名")

    # 説明 - Description
    description = models.TextField(blank=True, verbose_name="説明")

    products = models.ManyToManyField(Product, blank=True, related_name="categories")

    class Meta:
        verbose_name = "カテゴリ"
        verbose_name_plural = "カテゴリ一覧"

    def __str__(self):
        return self.name

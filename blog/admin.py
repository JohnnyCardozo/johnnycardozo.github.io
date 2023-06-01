from django.contrib import admin
from blog.models import ImagensJogos

class ListandoJogos(admin.ModelAdmin):
    list_display = ("id", "nome", "legenda", "publicada")
    list_display_links = ("id", "nome")
    search_fields = ("nome",)
    list_filter = ("genero", "Plataforma",)
    list_editable = ("publicada", )
    list_per_page = 10


# Register your models here.
admin.site.register(ImagensJogos, ListandoJogos)

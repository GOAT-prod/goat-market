package handlers

import (
	"net/http"
	"storage-service/service"
)

func GetProducts(storageService service.StorageService) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		//storageCtx := storagecontext.New()

		storageService.GetProduct()
	}
}

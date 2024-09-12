package database

import (
	"github.com/jmoiron/sqlx"
)

type StorageRepository interface {
	GetProduct()
}

type StorageRepositoryImpl struct {
	db *sqlx.DB
}

func NewStorageRepository(db *sqlx.DB) *StorageRepositoryImpl {
	return &StorageRepositoryImpl{
		db: db,
	}
}

func (r *StorageRepositoryImpl) GetProduct() {

}

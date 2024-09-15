package database

import (
	"github.com/jmoiron/sqlx"
)

type StorageRepository interface {
	GetDbProduct()
}

type StorageRepositoryImpl struct {
	db *sqlx.DB
}

func NewStorageRepository(db *sqlx.DB) StorageRepository {
	return &StorageRepositoryImpl{
		db: db,
	}
}

func (r *StorageRepositoryImpl) GetDbProduct() {

}

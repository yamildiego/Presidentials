<?php

require_once APPPATH . "models/Entidades/Entities.php";

class Entities_model extends CI_Model
{

    public $em;

    public function __construct()
    {
        parent::__construct();
        $this->em = $this->doctrine->em;
    }

    public function save($entity)
    {
        $this->em->persist($entity);
        $this->em->flush();
        return $entity;
    }

    public function getVoteByDni($dni)
    {
        $query = $this->em->getRepository('Vote')
            ->createQueryBuilder('v');

        $query->where('v.dni = :dni')->setParameter('dni', $dni);

        return $query->getQuery()->getOneOrNullResult();
    }
}